const list = document.getElementById('list');
const msv =document.getElementById('msv')
const ht =document.getElementById('ht')
const ns =document.getElementById('ns')

function chuanHoa(date){
    return date[8]+date[9]+'/'+date[5]+date[6]+'/'+date[0]+date[1]+date[2]+date[3]
}

function addSv(){
    if(msv.value&&ht.value&&ns.value&&!document.getElementById(`${msv.value}`)){
        let maSinhVien=msv.value;
        list.innerHTML += `<tr id="${maSinhVien}">
        <td class="fix">${maSinhVien}</td>
        <td class="fix ht">${ht.value}</td>
        <td class="fix ns">${chuanHoa(ns.value)}</td>
        <td>
            <button onclick="deleteSV('${maSinhVien}')">Delete</button>
            <button class="edit" onclick="editSV('${maSinhVien}')">Edit</button>
        </td></tr>`
    }
}

function updateSv(){
    if(msv.value){
        sinhVien =document.getElementById(`${msv.value}`);
        if(ht.value) sinhVien.querySelector('.ht').innerHTML=ht.value;
        if(ns.value) sinhVien.querySelector('.ns').innerHTML=chuanHoa(ns.value);
    }
}

function deleteSV(ms){
    document.getElementById(ms).remove();
}

function editSV(sv){
    let sinhVien = document.getElementById(sv);
    sinhVien.querySelector(".edit").outerHTML= `<button class="edit" onclick="fixSV('${sv}')">Fix</button>`
    for(let i=0;i<3;i++){
        let elementFix = sinhVien.getElementsByClassName("fix")[i];
        let type;
        let valueFix = elementFix.innerText;
        if(i==2){
           type = 'date';
        } 
        else type = 'text';
        elementFix.innerHTML=`<input type="${type}" value="${valueFix}" />`;
    }
}

function fixSV(sv){
    let sinhVien = document.getElementById(sv);
    if(sinhVien.getElementsByClassName("fix")[2].firstChild.value){
        sinhVien.querySelector(".edit").outerHTML= `<button class="edit" onclick="editSV('${sv}')">Edit</button>`
        for(let i=0;i<3;i++){
            let elementFix = sinhVien.getElementsByClassName("fix")[i];
            let valueFix = elementFix.firstChild.value;
            if(i==2) valueFix = chuanHoa(valueFix);
            elementFix.innerHTML=`${valueFix}`;
        }
    }
}