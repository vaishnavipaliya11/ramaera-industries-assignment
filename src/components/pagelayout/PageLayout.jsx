import { Header } from "../header/Header"
import "../../styles.css"
import { Sidebar } from "../sidebar/Sidebar"
import { DetailCard } from "../productsDetail/DetailCard"
export const PageLayout = () =>{
    return(
        <div className="page-layout">
            <Header/>
            <div className="sub-layout">
            <Sidebar/>
            <DetailCard/>
            </div>
        </div>
    )
}