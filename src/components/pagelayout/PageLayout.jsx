import { Header } from "../header/Header"
import "../../styles.css"
import { Sidebar } from "../sidebar/Sidebar"
import { DetailsContainer } from "../productsDetail/Home"
export const PageLayout = () =>{
    return(
        <div className="page-layout">
            <Header/>
            <div className="sub-layout">
            <Sidebar/>
            <DetailsContainer/>
            </div>
        </div>
    )
}