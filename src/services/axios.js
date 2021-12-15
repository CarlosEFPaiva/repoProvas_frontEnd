export function getStartingOptions() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            years: [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013],
            semesters: [1, 2],
            categories: ['P1', 'P2', 'P3', '2a chamada', 'Outras'],
            subjects: ['Mecânica dos Fluidos', 'Mecânica dos Sólidos', 'Soldagem', 'Dinâmica', 'Metrologia'],
        }), 2000);
    });
}

export function getProfessors() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({
            professors: ['Lavinia', 'Nestor', 'Albino', 'Daniel Onofre', 'Rochinha', 'Anna Carla', 'Daniel Castello', 'Flavio', 'Stockler'],
        }), 2000);
    });
}
