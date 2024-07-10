import { useContext } from "react";
import CategoriaContext from "./CategoriaContext";
import Alerta from "../../comuns/Alerta";
import CampoEntrada from "../../comuns/CampoEntrada";
import Dialogo from "../../comuns/Dialogo";

function Form() {
    const { objeto, handleChange, acaoCadastrar, alerta } = useContext(CategoriaContext);

    return (
        <Dialogo id="modalEdicao" titulo="Categoria" idform="formulario" acaoCadastrar={acaoCadastrar}>
            <Alerta alerta = {alerta}/>
            
            <CampoEntrada id="txtCodigo" label="Código" tipo="number" placeholder="" 
            requerido="false" nome="codigo" value={objeto.codigo} onchange={handleChange}
            msgValido="" msgInvalido="" readonly={true}/>  

            <CampoEntrada id="txtNome" label="Nome" tipo="text" placeholder="Informar o nome" 
            requerido="true" nome="nome" value={objeto.nome} onchange={handleChange}
            msgValido="Campo nome preenchido" msgInvalido="Informe o nome" readonly={false}/>  

        </Dialogo>
    )
}

export default Form;