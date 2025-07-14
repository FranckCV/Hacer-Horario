const activities = [
    { name: "DESARROLLO DE SISTEMAS INTELIGENTES", letters: "DSI", day: 6, hr_ini: 7, hr_fin: 11, color: "#c15300", ciclo: 7, group: "B", prof: "Valqui", estado: true },
    { name: "FUNDAMENTOS Y DISEÑO DE REDES DE DATOS", letters: "FDR", day: 2, hr_ini: 9, hr_fin: 11, color: "#a40000", ciclo: 7, group: "A", prof: "Bravo", estado: true },
    { name: "FUNDAMENTOS Y DISEÑO DE REDES DE DATOS", letters: "FDR", day: 3, hr_ini: 7, hr_fin: 10, color: "#a40000", ciclo: 7, group: "A", prof: "Bravo", estado: true },
    { name: "INGENIERIA Y CALIDAD DE SOFTWARE", letters: "ICS", day: 2, hr_ini: 11, hr_fin: 14, color: "#0067d1", ciclo: 7, group: "A", prof: "Marlon", estado: true },
    { name: "INGENIERIA Y CALIDAD DE SOFTWARE", letters: "ICS", day: 4, hr_ini: 7, hr_fin: 10, color: "#0067d1", ciclo: 7, group: "A", prof: "Marlon", estado: true },
    { name: "INTELIGENCIA DE NEGOCIOS", letters: "IN", day: 5, hr_ini: 10, hr_fin: 13, color: "#3e4f66", ciclo: 7, group: "B", prof: "Zumaran", estado: true },
    { name: "INTELIGENCIA DE NEGOCIOS", letters: "IN", day: 6, hr_ini: 11, hr_fin: 13, color: "#3e4f66", ciclo: 7, group: "B", prof: "Zumaran", estado: true },
    { name: "INVESTIGACION EN INGENIERIA", letters: "IEI", day: 4, hr_ini: 14, hr_fin: 19, color: "#87c100", ciclo: 7, group: "B", prof: "Aranguri", estado: true },
    { name: "MORAL CATOLICA", letters: "MC", day: 1, hr_ini: 16, hr_fin: 19, color: "#9700dc", ciclo: 7, group: "G", prof: "Niño", estado: true },
    { name: "SISTEMAS DISTRIBUIDOS", letters: "SD", day: 4, hr_ini: 10, hr_fin: 12, color: "#00b66a", ciclo: 7, group: "B", prof: "Zumaran", estado: true },
    { name: "SISTEMAS DISTRIBUIDOS", letters: "SD", day: 5, hr_ini: 7, hr_fin: 10, color: "#00b66a", ciclo: 7, group: "B", prof: "Zumaran", estado: true },
    { name: "FUTSAL", letters: "FUT", day: 3, hr_ini: 15, hr_fin: 17, color: "#565656", ciclo: 0, group: "C", prof: "--", estado: true },
];

const nombresDias = ["HORA", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const cols = 8, rows = 25, sizeCell = 50, sizeCol = 120, sizeRow = 40;
const grid = [];
const time = new Date();
// const dayActual = 2;
const dayActual = time.getDay();
// const horaActual = 9;
const horaActual = time.getHours();
// const minActual = 20;
const minActual = time.getMinutes();
// const secActual = 20;
const secActual = time.getSeconds();


function createGrid() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = ``;
    // gridElement.style.gridTemplateColumns = `repeat(${cols}, ${sizeCol}px)`;
    gridElement.style.gridTemplateRows = `repeat(${rows + 1}, ${sizeRow}px)`;
    gridElement.style.gridTemplateColumns = `repeat(${cols}, 9vw)`;
    // gridElement.style.gridTemplateRows = `repeat(${rows + 1}, auto)`;

    for (let i = 0; i < rows; i++) {
        grid[i] = [];
        for (let j = 0; j < cols; j++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            gridElement.appendChild(cellElement);

            const cell = {
                x: i,
                y: j,
                isFill: false,
                parent: null,
                element: cellElement,
            };
            grid[i][j] = cell;

            if (i === 0) {
                cellElement.classList.add('cell_1');
                cellElement.innerHTML = `${nombresDias[(j)]}`;
            } else if (j === 0) {
                cellElement.classList.add('cell_2');
            } else {
                cellElement.setAttribute(`data-hrs`, `${i - 1}`);
                cellElement.setAttribute(`data-day`, `${j - 1}`);
            }

            if (i !== 0 && j === 0) {
                cellElement.innerHTML = `<span>${i - 1}:00 - ${i}:00</span>`;
            } else {
                for (const act of activities) {
                    if (parseInt(dayActual) + 1 > parseInt(cellElement.getAttribute("data-day"))) {
                        if (parseInt(dayActual) <= parseInt(cellElement.getAttribute("data-day"))) {
                            if (parseInt(cellElement.getAttribute("data-hrs")) < parseInt(horaActual)) {
                                agregarPasado(cellElement);
                            } else if (
                                parseInt(cellElement.getAttribute("data-day")) === parseInt(act.day) &&
                                parseInt(cellElement.getAttribute("data-hrs")) >= parseInt(act.hr_ini) &&
                                parseInt(cellElement.getAttribute("data-hrs")) < parseInt(act.hr_fin) &&
                                act.estado
                            ) {
                                agregarGrupo(cellElement, act);
                            } else if (parseInt(cellElement.getAttribute("data-hrs")) === parseInt(horaActual)) {
                                agregarPresente(cellElement);
                            }
                        } else {
                            agregarPasado(cellElement);
                        }
                    } else if (
                        parseInt(cellElement.getAttribute("data-day")) === parseInt(act.day) &&
                        parseInt(cellElement.getAttribute("data-hrs")) >= parseInt(act.hr_ini) &&
                        parseInt(cellElement.getAttribute("data-hrs")) < parseInt(act.hr_fin) &&
                        act.estado
                    ) {
                        agregarGrupo(cellElement, act);
                    }
                }
            }
        }
    }
}

function agregarPasado(cell) {
    // cell.classList.add(`cell_pasado`);
    // cell.innerHTML = `
    //     <div class="pasado"></div>
    // `;
    cell.classList.add(`cell_pasado`);
    cell.innerHTML = ``;
}

function agregarGrupo(cell, act) {
    cell.innerHTML += `
                <div class="block" style="background-color: ${act.color}">
                <span>
                    ${act.letters}
                </span>
                </div>
                `;
    let cant = cell.querySelectorAll('.block').length;
    if (cant > 1) {
        cell.classList.add(`error`);
    }
}

function agregarPresente(cell) {
    // cell.style.background = `rgba(0,0,0,${minActual / 60})`;
    // cell.innerHTML = `${horaActual}:${minActual}:${secActual}`;
    // cell.style.background = ``;
    cell.classList.add('cell_actual');
    // cell.innerHTML = `ewwwrewr`;
    cell.innerHTML = `
    <div 
        class="actual" 
        style="background: rgba(0,0,0,${minActual / 60}); "
    >
    a
    </div>
    `;
    // ${horaActual}:${minActual}:${secActual}
    // color: rgba(255,255,255,${minActual / 60})
}

function toggleGroup(curso, grupo) {
    activities.forEach(act => {
        if (act.name === curso) {
            act.estado = act.group === grupo;
        }
    });

    createGrid();
}

function listarCursos() {
    const asideElement = document.getElementById('listaCursos');
    asideElement.innerHTML = "";

    const ciclos = {};
    for (const act of activities) {
        if (!ciclos[act.ciclo]) ciclos[act.ciclo] = {};
        if (!ciclos[act.ciclo][act.name]) ciclos[act.ciclo][act.name] = { color: act.color, grupos: {} };
        if (!ciclos[act.ciclo][act.name].grupos[act.group]) {
            ciclos[act.ciclo][act.name].grupos[act.group] = { prof: act.prof, actividades: [] };
        }
        ciclos[act.ciclo][act.name].grupos[act.group].actividades.push(act);
    }

    for (const ciclo of Object.keys(ciclos).sort((a, b) => a - b)) {
        const cicloElement = document.createElement('div');
        cicloElement.classList.add('ciclo');
        cicloElement.innerHTML = `<p class="nom_ciclo">Ciclo ${ciclo}</p>`;

        for (const curso in ciclos[ciclo]) {
            const cursoElement = document.createElement('div');
            cursoElement.classList.add('curso');
            cursoElement.innerHTML = `<p class="nom_curso">${curso}</p>`;
            cursoElement.querySelector('.nom_curso').style.backgroundColor = ciclos[ciclo][curso].color;

            for (const grupo in ciclos[ciclo][curso].grupos) {
                const grupoData = ciclos[ciclo][curso].grupos[grupo];
                const checked = grupoData.actividades.some(act => act.estado);

                const grupoElement = document.createElement('div');
                grupoElement.classList.add('grupo');
                grupoElement.innerHTML = `
                    <div class="nom_grupo">
                        ${grupo} | ${grupoData.prof}
                    </div>
                    <div class="box">
                        <input type="radio" name="${curso}" onchange="toggleGroup('${curso}', '${grupo}')" ${checked ? "checked" : ""}>
                    </div>
                    `;
                cursoElement.appendChild(grupoElement);
            }

            cicloElement.appendChild(cursoElement);
        }

        asideElement.appendChild(cicloElement);
    }
}



// listarCursos();
createGrid();





