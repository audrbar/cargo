import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <Navbar />
                <div className="col-5">
                    <div className="card mt-4">
                        <p>We are number ONE cargo company!</p>
                        <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eligendi accusantium sapiente, quod autem saepe tempore dolore quo natus iusto exercitationem quidem itaque pariatur vel quis cum consequuntur totam officia.
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;