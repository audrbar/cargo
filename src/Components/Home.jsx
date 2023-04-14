import Footer from "./Footer";
import Navbar from "./Navbar";
import Totals from "./Totals";

function Home() {

    return (
        <div className="container">
            <Navbar />
            <div className="row justify-content-center">
                <div className="col-10 text-center">
                    <div className="card mt-4">
                        <h3 className="my-5">We are number ONE cargo company!</h3>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eligendi accusantium sapiente, quod autem saepe tempore dolore quo natus iusto exercitationem quidem itaque pariatur vel quis cum consequuntur totam officia.
                        </div>
                    </div>
                    <Totals />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;