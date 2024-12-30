/* case 정리 */
//1.말을 선택하고 보드를 선택할 때
//01. 가고자 하는 cell에 아무 marker도 없는 경우
//02. 가고자 하는 cell에 다른 player의 marker가 있는 경우
//03. 가고자 하는 cell에 동일 player의 marker가 있는 경우


let selectedMarker = new Marker(null, null);
let targetCellView = new CellView(null, null);

//marker 선택
function clickMarker(e) {
    // 클릭한 DOM 요소에서 markerView 객체 가져오기
    let clickedMarker = e.target.markerViewObject;

    if(selectedMarker == null || selectedMarker != clickedMarker) {
        selectedMarker = clickedMarker;
        console.log("marker player: " + selectedMarker.playerId)
    } else if(selectedMarker == clickedMarker) {
        selectedMarker = null;
    }
}

//cellView 선택
function clickCellView(e) {
    // 클릭한 DOM 요소에서 cellView 객체 가져오기
    targetCellView = e.target.cellViewObject;
    let currentCellView = targetCellView;

    //marker 정보 가고자하는 cell 객체에 대입
    targetCellView.playerId = selectedMarker.playerId;
    targetCellView.markerId = selectedMarker.markerId;

    console.log("gridLoc: " + targetCellView.gridLoc)
    console.log("cellType: " + targetCellView.cellType);

    if(selectedMarker != null) {
        if(!isCellFull(targetCellView)) {
            //01. 가고자 하는 cell에 아무 marker도 없는 경우
            targetCellView.status = true;
            targetCellView.classList.toggle('stautus-true');
        } else if(!isSamePlayer(targetCellView, currentCellView)) {
            //02. 가고자 하는 cell에 다른 player의 marker가 있는 경우
        } else if(isSamePlayer(targetCellView, currentCellView)) {
            //03. 가고자 하는 cell에 동일 player의 marker가 있는 경우
        }
    }else {
        alert("말을 먼저 선택하세요.");
    }
}

//cell 점유 여부 확인
function isCellFull(targetCellView) {
    let checkTargetCellView = targetCellView;

    if(checkTargetCellView.status == false)
        return false;
    else
        return true;
}

//cell 점유시 동일 player 여부 확인
function isSamePlayer(targetCellView, currentCellView) {
    let checkTargetCellView = targetCellView;
    let checkCurrentCellView = currentCellView

    if(checkTargetCellView.playerId == checkCurrentCellView.playerId)
        return true;
    else
        return false;
}