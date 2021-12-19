import styled from 'styled-components';
import { useState, useEffect } from 'react';

import GoHomeButton from '../../shared/GoHomeButton';
import BoldText from '../../shared/BoldText';
import BlankSpace from '../../shared/BlankSpace';
import InitialButtons from './components/InitialButtons/InitialButtons';
import OptionsSelection from './components/OptionsSelection/OptionSelection';
import { setProfessors, setSubjects, setTestsOptions } from './ViewTestFunctions';
import Tests from './components/Tests/Tests';

export default function ViewTest() {
    const [selectedMainFilter, setSelectedMainFilter] = useState('');
    const [secondaryFilter, setSecondaryFilter] = useState({});
    const [filterOptions, setFilterOptions] = useState([]);
    const [tests, setTests] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const mainFilters = [
        { key: 'Main Filter 1', id: 1, text: 'Por professores' },
        { key: 'Main Filter 2', id: 2, text: 'Por disciplina' },
    ];

    useEffect(() => {
        if (selectedMainFilter === 1) {
            setSecondaryFilter({});
            setProfessors(setIsLoading, setFilterOptions);
        }
        if (selectedMainFilter === 2) {
            setSecondaryFilter({});
            setSubjects(setIsLoading, setFilterOptions);
        }
    }, [selectedMainFilter]);

    useEffect(() => {
        if (!secondaryFilter.id) {
            if (tests.length) {
                setTests([]);
            }
        } else {
            const searchByProfessors = selectedMainFilter === 1;
            setTestsOptions(setIsLoading, setTests, searchByProfessors, secondaryFilter.id);
        }
    }, [secondaryFilter]);
    return (
        <>
            <Wrapper>
                <GoHomeButton />
                <BoldText fontSize="40px">
                    Selecione como deseja filtrar a busca por provas:
                </BoldText>
                <InitialButtons
                    mainFilters={mainFilters}
                    selectedMainFilter={selectedMainFilter}
                    setSelectedMainFilter={setSelectedMainFilter}
                />
                <OptionsSelection
                    selectedMainFilter={selectedMainFilter}
                    options={filterOptions}
                    secondaryFilter={secondaryFilter}
                    setSecondaryFilter={setSecondaryFilter}
                />
                <Tests
                    tests={tests}
                />
            </Wrapper>
            <BlankSpace
                isTransparent
                isLoading
                isShown={isLoading}
            />
        </>
    );
}

const Wrapper = styled.main`
    width: 100%;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > div:first-of-type {
        margin-top: 60px;
    }
`;
