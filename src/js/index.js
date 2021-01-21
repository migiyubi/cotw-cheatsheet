import 'css/main.css'

class App {
    constructor() {
        this._initMaster().then(() => {
            this._initCallerMap(this._data.caller);
            this._initMapSelector(document.body);
            this._initMapInfo(document.body);
            this._initAnimalTable(document.body);

            this._setMap('hirschfelden');
        });
    }

    async _initMaster() {
        const resp = await fetch('assets/master.json');
        const json = await resp.json();
        this._data = json;
    }

    _initCallerMap(caller) {
        const m = {};

        for (const k in caller) {
            const c = caller[k];

            for (const t of c.targets) {
                if (m[t] !== undefined) {
                    continue;
                }

                m[t] = k;
            }
        }

        this._callerMap = m;
    }

    _initMapSelector(parent) {
        const wrapper = document.createElement('div');
        parent.appendChild(wrapper);

        const select = document.createElement('select');
        select.setAttribute('id', 'map-selector');
        wrapper.appendChild(select);

        for (const k in this._data.map) {
            const option = document.createElement('option');
            option.textContent = this._data.map[k].display_name.en;
            option.value = k;

            select.appendChild(option);
        }

        select.addEventListener('change', (e) => {
            const k = select.children[select.selectedIndex].value;
            this._setMap(k);
        });
    }

    _initMapInfo(parent) {
        const mapInfo = document.createElement('div');
        mapInfo.setAttribute('id', 'map-info');
        parent.appendChild(mapInfo);

        this._mapNameJp = document.createElement('div');
        this._mapNameJp.setAttribute('id', 'map-name-jp');
        mapInfo.appendChild(this._mapNameJp);

        const mapImageLink = document.createElement('div');
        mapImageLink.setAttribute('id', 'map-image-link');
        mapInfo.appendChild(mapImageLink);

        this._mapImageLinkA = document.createElement('a');
        this._mapImageLinkA.textContent = 'MAP';
        this._mapImageLinkA.setAttribute('target', '_blank');
        this._mapImageLinkA.setAttribute('rel', 'noopener noreferrer');
        mapImageLink.appendChild(this._mapImageLinkA);
    }

    _initAnimalTable(parent) {
        this._table = document.createElement('table');
        parent.appendChild(this._table);
    }

    _clearDom(parent) {
        while (parent.children.length > 0) {
            parent.removeChild(parent.children[0]);
        }
    }

    _setMap(key) {
        this._mapNameJp.textContent = this._data.map[key].display_name.jp;
        this._mapImageLinkA.href = this._data.map[key].url_map;

        this._updateAnimalTable(this._table, this._data.map[key], this._data.animal, this._data.caller, this._data.difficulty);
    }

    _updateAnimalTable(root, masterMap, masterAnimal, masterCaller, masterDifficulty) {
        this._clearDom(root);

        const header = document.createElement('thead');
        root.appendChild(header);

        const headerName = document.createElement('td');
        headerName.textContent = 'Animal';
        header.appendChild(headerName);

        const headerClass = document.createElement('td');
        headerClass.textContent = 'Class';
        header.appendChild(headerClass);

        const headerCaller = document.createElement('td');
        headerCaller.textContent = 'Caller';
        header.appendChild(headerCaller);

        const headerDifficulty = document.createElement('td');
        headerDifficulty.textContent = 'Max Difficulty';
        header.appendChild(headerDifficulty);

        const headeScore = document.createElement('td');
        headeScore.textContent = 'Min Diamond Score';
        header.appendChild(headeScore);

        const animals = masterMap.animals.slice();
        animals.sort((a, b) => { return masterAnimal[a].class - masterAnimal[b].class; });

        for (const a of animals) {
            this._addAnimalRow(root, masterAnimal[a], masterCaller[this._callerMap[a]], masterDifficulty[masterAnimal[a].max_difficulty]);
        }
    }

    _addAnimalRow(parent, animal, caller, difficulty) {
        const row = document.createElement('tr');
        parent.appendChild(row);

        const cellName = document.createElement('td');
        const cellNameEn = document.createElement('div');
        const cellNameJp = document.createElement('div');
        cellName.classList.add('animal-name');
        cellNameEn.classList.add('animal-name-en');
        cellNameJp.classList.add('animal-name-jp');
        cellNameEn.textContent = animal.display_name.en;
        cellNameJp.textContent = animal.display_name.jp;
        cellName.appendChild(cellNameEn);
        cellName.appendChild(cellNameJp);
        row.appendChild(cellName);

        const cellClass = document.createElement('td');
        cellClass.classList.add('animal-class');
        cellClass.textContent = animal.class.toString(10);
        row.appendChild(cellClass);

        const cellCaller = document.createElement('td');
        cellCaller.classList.add('animal-caller');
        cellCaller.textContent = (caller !== undefined) ? caller.display_name.jp : '-';
        row.appendChild(cellCaller);

        const cellDifficulty = document.createElement('td');
        cellDifficulty.classList.add('animal-difficulty');
        cellDifficulty.textContent = difficulty.display_name.jp;
        row.appendChild(cellDifficulty);

        const cellScore = document.createElement('td');
        cellScore.classList.add('animal-score');
        cellScore.textContent = animal.min_diamond_score.toFixed(1);
        row.appendChild(cellScore);

        return row;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new App();
});
