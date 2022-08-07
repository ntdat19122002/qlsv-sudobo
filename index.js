const list = document.getElementById('list');
const msv =document.getElementById('msv');
const ht =document.getElementById('ht');
const ns =document.getElementById('ns');
var svList =[];
function addSv(){
    var SinhVien = {
        maSinhVien:msv.value,
        hoTen:ht.value,
        ngaySinh:ns.value
    }
    svList.push(SinhVien);
    list.innerHTML =  svList.map(sv=>(
        `<tr id="${sv.maSinhVien}">
        <td>${sv.maSinhVien}</td>
        <td>${sv.hoTen}</td>
        <td>${sv.ngaySinh}</td>
        <td><button onclick="deleteSV(${sv.maSinhVien})">delete</button></td></tr>`
    ))
}

function deleteSV(sv){

}