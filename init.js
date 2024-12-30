//cellView, marker 최초 그리기
window.addEventListener('load', function () {
    initCellView();
    initMarker();
});

//Board Cell 객체 선언 
class CellView {
    constructor(cellType, gridLoc) {
        this.cellType = cellType;
        this.gridLoc = gridLoc;
        this.markerId = null;
        this.status = false;
    }

    createView() {
        let cellView = document.createElement("div");
        cellView.className = "cellView";

        if(this.status) {
            cellView.classList.add('status-true');
        } else {
            cellView.classList.add('status-false');
        }

        //CellView 객체를 DOM 요소에 연결
        cellView.cellViewObject = this;

        cellView.addEventListener('click', function(e) {
            clickCellView(e);
        });

        return cellView;
    }
}

//cellView 그리기
function initCellView() {
    const cell = document.getElementsByClassName("cell");

    for(let i = 0; i < cell.length; i++) {
        //cellType 얻기
        const classList = cell[i].classList;
        let cellType = classList[1];

        //grid 위치 얻기
        const gridLoc = cell[i].getBoundingClientRect();

        //cellView 객체 생성
        let cellView = new CellView(cellType, gridLoc);
        cell[i].append(cellView.createView());
    }
}

//Marker 객체 선언
class Marker {
    constructor(playerId, markerId) {
        this.playerId = playerId;
        this.markerId = markerId;
        this.currentLoc = null;
    }

    createView() {
        let markerView = document.createElement("div");
        markerView.className = "marker";
        markerView.textContent = this.playerId + this.markerId;

        //markerView 객체를 DOM 요소에 연결
        markerView.markerViewObject = this;

        markerView.addEventListener('click', function (e) {
            clickMarker(e);
        });

        return markerView;
    }
}

//marker 그리기
function initMarker(){
    const playerContainer = document.getElementsByClassName("playerContainer");
    
    //marker 그리기
    for(let i = 0; i < playerContainer.length; i++){
        //player 정보 얻기
        const player = playerContainer[i].getElementsByClassName("playerName");
        let playerId = player[0].getAttribute("id");
        
        //markerContainer div 만들기
        let markerContainer = document.createElement("div");
        markerContainer.className = "markerContainer";
        
        for(let j = 0; j < 2; j++){
            let markerView = new Marker(playerId, j);
            markerContainer.append(markerView.createView());
        }
 
        playerContainer[i].append(markerContainer);
    }
}
