import styled from 'styled-components';
import { useEffect, useState } from 'react';

import NewTestContext from '../../../contexts/NewTestContext';

import GoHomeButton from '../../shared/GoHomeButton';
import BoldText from '../../shared/BoldText';
import OptionsSelection from './OptionsSelection/OptionSelection';
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
    const selectionParameters = [
        { title: 'Selecione o ano:', atribute: 'year', selectionOptions: options.years },
        { title: 'Selecione o semestre:', atribute: 'semester', selectionOptions: options.semesters },
        { title: 'Selecione a categoria:', atribute: 'category', selectionOptions: options.categories },
        { title: 'Selecione a disciplina:', atribute: 'subject', selectionOptions: options.subjects.map(({ name }) => name) },
        { title: 'Selecione o(a) professor(a):', atribute: 'professor', selectionOptions: options.professors },
    ];

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
            const subjectId = options.subjects.find(({ name }) => name === newTestData.subject).id;
            setProfessors(options, setOptions, setIsLoading, subjectId);
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
                        {
                            selectionParameters.map(({ title, atribute, selectionOptions }) => (
                                <OptionsSelection
                                    key={`Option Selection ${title}`}
                                    title={title}
                                    atribute={atribute}
                                    options={selectionOptions}
                                />
                            ))
                        }
                    </NewTestContext.Provider>
                </div>
                <LabeledInput
                    title="Digite o link da sua prova:"
                    isShown={!!newTestData.professor}
                    value={newTestData.link}
                    onChange={(e) => adjustTestSingleAtribute('link', e.target.value)}
                />
                <SendButton
                    text="Enviar"
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                    isShown={!!newTestData.professor}
                    newTestData={newTestData}
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
