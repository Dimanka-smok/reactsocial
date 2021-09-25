import React from "react";
import "./Dialogs.css"
import Dialog from "./Dialog/Dialog";

function Dialogs(){
    let message1="Не следует, однако, забывать о том, что консультация с профессионалами из IT позволяет выполнить важнейшие задания по разработке дальнейших направлений развитая системы массового участия. С другой стороны выбранный нами инновационный."
    let message2="Дорогие друзья, постоянный количественный рост и сфера нашей активности способствует подготовке и реализации направлений прогрессивного развития. Практический опыт показывает, что реализация намеченного плана развития влечет за собой процесс внедрения."
    let message3="С другой стороны начало повседневной работы по формированию позиции позволяет оценить значение существующих финансовых и административных условий."
    let message4="С другой стороны реализация намеченного плана развития требует от нас анализа существующих финансовых и административных условий."
    return(
        <div className="dialogs">
        <div className="button-right">
        <button className="otpravka">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5MiA0OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDQyLjYyNywxODUuMzg4TDI2NS4wODMsNy44NDRDMjYwLjAxOSwyLjc4LDI1My4yNjMsMCwyNDUuOTE1LDBjLTcuMjA0LDAtMTMuOTU2LDIuNzgtMTkuMDIsNy44NDRMNDkuMzQ3LDE4NS4zODgNCgkJCWMtMTAuNDg4LDEwLjQ5Mi0xMC40ODgsMjcuNTY4LDAsMzguMDUybDE2LjEyLDE2LjEyOGM1LjA2NCw1LjA2LDExLjgyLDcuODQ0LDE5LjAyOCw3Ljg0NGM3LjIwNCwwLDE0LjE5Mi0yLjc4NCwxOS4yNTItNy44NDQNCgkJCWwxMDMuODA4LTEwMy41ODR2MzI5LjA4NGMwLDE0LjgzMiwxMS42MTYsMjYuOTMyLDI2LjQ0OCwyNi45MzJoMjIuOGMxNC44MzIsMCwyNy42MjQtMTIuMSwyNy42MjQtMjYuOTMyVjEzNC44MTZsMTA0LjM5NiwxMDQuNzUyDQoJCQljNS4wNiw1LjA2LDExLjYzNiw3Ljg0NCwxOC44NDQsNy44NDRzMTMuODY0LTIuNzg0LDE4LjkzMi03Ljg0NGwxNi4wNzItMTYuMTI4QzQ1My4xNjMsMjEyLjk1Miw0NTMuMTIzLDE5NS44OCw0NDIuNjI3LDE4NS4zODh6Ig0KCQkJLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
        </button>
        </div> 
        <Dialog name={"Владимир"} message={message1}/>
        <Dialog name={"Мария"} message={message2}/>
        <Dialog name={"Михаил"} message={message3}/>
        <Dialog name={"Вячеслав"} message={message4}/>
        </div>
    )
}

export default Dialogs