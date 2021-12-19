export function selectOption(e, adjustTestSingleAtribute, atribute, option, setIsOpened) {
    e.stopPropagation();
    setIsOpened(false);
    adjustTestSingleAtribute(atribute, option);
}
