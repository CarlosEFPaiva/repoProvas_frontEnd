/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { SemesterStyle } from './OptionsBox/OptionsStyles';

function selectOption(e, setSecondaryFilter, id, name, setIsOpened) {
    e.stopPropagation();
    setIsOpened(false);
    setSecondaryFilter({ id, name });
}

function printSemester(semester) {
    return (
        <SemesterStyle key={`semester: ${semester}`}>
            {`- ${semester}:`}
        </SemesterStyle>
    );
}

function printClickableOption({ option, onClick }) {
    return (
        <span
            key={`clickable Option: ${option}`}
            onClick={onClick}
        >
            {option}
        </span>
    );
}

export function printOption(sentOption, setSecondaryFilter, setIsOpened) {
    const {
        id,
        option,
        semester,
    } = sentOption;
    if (semester) {
        return printSemester(semester);
    }
    const onClick = (e) => {
        selectOption(e, setSecondaryFilter, id, option, setIsOpened);
    };
    return printClickableOption({ option, onClick });
}
