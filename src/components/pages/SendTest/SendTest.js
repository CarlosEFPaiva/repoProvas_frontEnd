import styled from 'styled-components';
import { useEffect, useState } from 'react';

import NewTestContext from '../../../contexts/NewTestContext';

import GoHomeButton from '../../shared/GoHomeButton';
import BoldText from '../../shared/BoldText';
import OptionsSelection from '../../shared/OptionsSelection/OptionSelection';
import BlankSpace from '../../shared/BlankSpace';
import LabeledInput from '../../shared/LabeledInput';
import SendButton from './components/SendButton';

import { setProfessors, setStartingOptions } from './SendTestFunctions';
import { Loading } from '../../../utils/externalLibs/reactLoader';

export default function SendTest() {
    const [isLoading, setIsLoading] = useState(false);
    const [newTestData, setNewTestData] =
        useState({ year: '', semester: '', category: '', subject: '', professor: '', link: '' });
    const [options, setOptions] =
        useState({ years: [], semesters: [], categories: [], subjects: [], professors: [] });

    function adjustTestSingleAtribute(atribute, newValue) {
        const newObject = { ...newTestData };
        newObject[atribute] = newValue;
        if (atribute === 'subject') {
            newObject.professor = '';
        }
        setNewTestData(newObject);
    }

    useEffect(() => {
        setStartingOptions(options, setOptions, setIsLoading);
    }, []);

    useEffect(() => {
        if (newTestData.year &&
            newTestData.semester &&
            newTestData.category &&
            newTestData.subject &&
            !newTestData.professor
        ) {
            setProfessors(options, setOptions, setIsLoading);
        }
    }, [newTestData]);

    if (!options.years.length) {
        return (
            <Wrapper>
                <GoHomeButton />
                <Loading
                    type="TailSpin"
                    color="#FFFFFF"
                    height="300px"
                    width="300px"
                />
            </Wrapper>
        );
    }

    return (
        <>
            <Wrapper>
                <GoHomeButton />
                <BoldText fontSize="40px">
                    Complete as informações sobre a prova:
                </BoldText>
                <div>
                    <NewTestContext.Provider value={{ newTestData, adjustTestSingleAtribute }}>
                        <OptionsSelection
                            title="Selecione o ano:"
                            atribute="year"
                            options={options.years}
                        />
                        <OptionsSelection
                            title="Selecione o semestre:"
                            atribute="semester"
                            options={options.semesters}
                        />
                        <OptionsSelection
                            title="Selecione a categoria:"
                            atribute="category"
                            options={options.categories}
                        />
                        <OptionsSelection
                            title="Selecione a disciplina:"
                            atribute="subject"
                            options={options.subjects}
                        />
                        <OptionsSelection
                            title="Selecione o(a) professor(a):"
                            atribute="professor"
                            options={options.professors}
                        />
                    </NewTestContext.Provider>
                </div>
                <LabeledInput
                    title="Digite o link da sua prova:"
                    isShown={!!options.professors.length}
                    value={newTestData.link}
                    onChange={(e) => adjustTestSingleAtribute('link', e.target.value)}
                />
                <SendButton
                    text="Enviar"
                    isShown={!!options.professors.length}
                    objectToSend={newTestData}
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
