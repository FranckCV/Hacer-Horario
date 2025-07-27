
const nombresDias = ["HORA", "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const cols = 8, rows = 17, sizeCell = 50, sizeCol = 120, sizeRow = 35;
const grid = [];
const time = new Date();
// const dayActual = time.getDay();
// const horaActual = time.getHours();
const dayActual = 0;
const horaActual = 0;


function createGrid() {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = ``;
    // gridElement.style.gridTemplateColumns = `repeat(${cols}, ${sizeCol}px)`;
    // gridElement.style.gridTemplateRows = `repeat(${rows + 1}, ${sizeRow}px)`;
    gridElement.style.gridTemplateColumns = `repeat(${cols}, ${sizeCol}px)`;
    gridElement.style.gridTemplateRows = `repeat(${rows }, ${sizeRow}px)`;

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
                cellElement.setAttribute(`data-hrs`, `${i - 1 + 7}`);
                cellElement.setAttribute(`data-day`, `${j - 1}`);
            }

            if (i !== 0 && j === 0) {
                cellElement.innerHTML = `<span>${i - 1 + 7}:00</span>`;
            } else {
                for (const act of activities) {
                    if (parseInt(dayActual) + 1 > parseInt(cellElement.getAttribute("data-day"))) {
                        if (parseInt(dayActual) <= parseInt(cellElement.getAttribute("data-day"))) {
                            if (parseInt(cellElement.getAttribute("data-hrs")) < parseInt(horaActual)) {
                                cellElement.innerHTML = ``;
                                cellElement.classList.add(`pasado`);
                            } else if (
                                parseInt(cellElement.getAttribute("data-day")) === parseInt(act.day) &&
                                parseInt(cellElement.getAttribute("data-hrs")) >= parseInt(act.hr_ini) &&
                                parseInt(cellElement.getAttribute("data-hrs")) < parseInt(act.hr_fin) &&
                                act.estado
                            ) {
                                agregarGrupo(cellElement, act);
                            }
                        } else {
                            cellElement.innerHTML = ``;
                            cellElement.classList.add(`pasado`);
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

function agregarGrupo(cell, act) {
    cell.innerHTML += `
                <div class="block" 
                style="
                border: 1px solid color-mix(in srgb, ${act.color} 100%, white 70%);
                background-color: color-mix(in srgb, ${act.color} 15%, transparent 50%);
                ">
                <span 
                style="
                color: color-mix(in srgb, ${act.color} 100%, white 90%);
                "
                >${act.letters} - ${act.group} | ${act.prof}</span>
                </div>
                `;
    let cant = cell.querySelectorAll('.block').length;
    if (cant > 1) {
        cell.classList.add(`error`);
    }
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
        if (!ciclos[act.ciclo][act.name]) ciclos[act.ciclo][act.name] = { color: act.color, grupos: {} , letras: act.letters };
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
            cursoElement.innerHTML = `<p class="nom_curso">${ciclos[ciclo][curso].letras}</p>`;
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
                        <input type="radio" name="${curso}" onchange="toggleGroup('${curso}', '${grupo}')">
                    </div>
                    `;
                cursoElement.appendChild(grupoElement);
            }

            cicloElement.appendChild(cursoElement);
        }

        asideElement.appendChild(cicloElement);
    }
}



listarCursos();
createGrid();




