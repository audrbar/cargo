import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Totals from "../Components/Totals";

function Home() {

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-10 col-lg-8 col-xxl-6 text-center">
                        <div className="card shadow my-4">
                            <h3 className="my-4 text-body">We are number ONE cargo company!</h3>
                            <div className="text-muted m-1">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum eligendi accusantium sapiente, quod autem saepe tempore dolore quo natus iusto exercitationem quidem itaque pariatur vel quis cum consequuntur totam officia.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Totals />
            <Footer />
        </>
    )
}

export default Home;