import { Label } from "@mui/icons-material"
import "./tarefas.scss"


function tarefas(){
    return(
        <div className="tarefas"> 
        <ul>
       <li>
        <label>Limpar casa</label>
 <input  type="checkbox"/></li>
       <li> <label >Reponder E-Mails</label>
 <input  type="checkbox"/>
</li>
</ul>

        </div>
    )
}
export default tarefas