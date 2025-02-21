import "./App.css"
import createLogo from "./createlogo.webp"
import { MdOutlinePerson2 } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { MdSlowMotionVideo } from "react-icons/md";
import { MdOutlinePodcasts } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import podcastimg from "./article.jpg"
import { CiCalendar } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaSquareCheck } from "react-icons/fa6";




function App() {
  return (
    <div className="App">
      <section id="Header" className="Header">
      <div className="logo">
        <img src={<createLogo />} alt="" />
      </div>

      <div className="menu">
        <ul>
            <a href="#about"><li>About Us</li></a>
            <a href="#courses"><li>Courses</li></a>
            <a href="#ewents"><li>Ewents</li></a>
            <a href="#blog"><li>Blog</li></a>
            <a href="#contacts"><li>Contacts</li></a>
        </ul>
      </div>

      <div className="btns">
        <button className="btn">Get consultation</button>
        <button className="btn"><i><MdOutlinePerson2 /></i> Log in/Register</button>
      </div>
      </section>

      <section className="blog" id="blog">
        <div className="blogtext">
          <p>Our blog</p>
          <h1>Createx School Journal</h1>
        </div>

        <div className="blogheader">
          <div className="blogbtn">All</div>
          <div className="blogmenu">
            <h5><i><MdOutlineArticle /></i> Articles</h5>
            <h5><i><MdSlowMotionVideo /></i> Videos</h5>
            <h5><i><MdOutlinePodcasts /></i> Podcasts</h5>
          </div>
        

        <div className="blogcategory">
          <h4>Blog category</h4>
          <h3>all themes <i><FaAngleDown /></i></h3>
        </div>

        <div className="blogsearch">
          <input type="search" placeholder="Search blog... "/>
        </div>
        </div>

        <div className="blogcards">
          <div className="blogcardthree">
            <div className="img">
              <h6><i><MdOutlinePodcasts /></i> Podcast</h6>
              <img src={<podcastimg />} alt="" />
            </div>

            <div className="imgcardheader">
              <h6>Marketing | <i><CiCalendar /></i> September 4, 2020 | <i><MdOutlineWatchLater /></i> 36 min</h6>
            </div>

            <div className="imgcardabout">
              <h3>What is traffic arbitrage and does it really make money?</h3>
              <h6>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</h6>
            </div>

            <div className="imggo">
              <h6>Listen <i><FaLongArrowAltRight /></i></h6>
            </div>
          </div>

          <div className="blogcardthree">
            <div className="img">
              <h6><i><MdOutlineArticle /></i> Article</h6>
              <img src={<podcastimg />} alt="" />
            </div>

            <div className="imgcardheader">
              <h6>Marketing | <i><CiCalendar /></i> September 4, 2020 | <i><MdOutlineWatchLater /></i> 36 min</h6>
            </div>

            <div className="imgcardabout">
              <h3>What is traffic arbitrage and does it really make money?</h3>
              <h6>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</h6>
            </div>

            <div className="imggo">
              <h6>Listen <i><FaLongArrowAltRight /></i></h6>
            </div>
          </div>

          <div className="blogcardthree">
            <div className="img">
              <h6><i><MdSlowMotionVideo /></i> Video</h6>
              <img src={<podcastimg />} alt="" />
            </div>

            <div className="imgcardheader">
              <h6>Marketing | <i><CiCalendar /></i> September 4, 2020 | <i><MdOutlineWatchLater /></i> 36 min</h6>
            </div>

            <div className="imgcardabout">
              <h3>What is traffic arbitrage and does it really make money?</h3>
              <h6>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</h6>
            </div>

            <div className="imggo">
              <h6>Listen <i><FaLongArrowAltRight /></i></h6>
            </div>
          </div>

          <div className="blogcardthree">
            <div className="img">
            <h6><i><MdOutlineArticle /></i> Article</h6>
            <img src={<podcastimg />} alt="" />
            </div>
            <div className="imgcardheader">
              <h6>Marketing | <i><CiCalendar /></i> September 4, 2020</h6>
            </div>

            <div className="imgcardabout">
              <h3>HR statistics: job search, interviews, hiring and recruiting</h3>
              <h6>Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...</h6>
            </div>

            <div className="imggo">
              <h6>Listen <i><FaLongArrowAltRight /></i></h6>
            </div>
          </div>

              <div className="blogcardthree">
              <div className="img">
              <h6><i> <MdSlowMotionVideo /></i> Video</h6>
              <img src={<podcastimg />} alt="" />
            </div>

            <div className="imgcardheader">
              <h6>Marketing | <i><CiCalendar /></i> September 4, 2020 | <i><MdOutlineWatchLater /></i> 36 min</h6>
            </div>

            <div className="imgcardabout">
              <h3>What to do and who to talk to if you want to get feedback on the product</h3>
              <h6>Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus. Curabitur nisl tincidunt eros venenatis...</h6>
            </div>

            <div className="imggo">
              <h6>Listen <i><FaLongArrowAltRight /></i></h6>
            </div>
              </div>

              <div className="blogcardthree">
            <div className="img">
              <h6><i><MdOutlinePodcasts /></i> Podcast</h6>
              <img src={<podcastimg />} alt="" />
            </div>

            <div className="imgcardheader">
              <h6>Marketing | <i><CiCalendar /></i> September 4, 2020 | <i><MdOutlineWatchLater /></i> 36 min</h6>
            </div>

            <div className="imgcardabout">
              <h3>What is traffic arbitrage and does it really make money?</h3>
              <h6>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</h6>
            </div>

            <div className="imggo">
              <h6>Listen <i><FaLongArrowAltRight /></i></h6>
            </div>
          </div>

          <div className="blogcardthree">
            <div className="img">
              <h6><i><MdOutlineArticle /></i> Article</h6>
              <img src={<podcastimg />} alt="" />
            </div>

            <div className="imgcardheader">
              <h6>Marketing | <i><CiCalendar /></i> September 4, 2020 | <i><MdOutlineWatchLater /></i> 36 min</h6>
            </div>

            <div className="imgcardabout">
              <h3>What is traffic arbitrage and does it really make money?</h3>
              <h6>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</h6>
            </div>

            <div className="imggo">
              <h6>Listen <i><FaLongArrowAltRight /></i></h6>
            </div>
          </div>

          <div className="blogcardthree">
            <div className="img">
              <h6><i><MdSlowMotionVideo /></i> Video</h6>
              <img src={<podcastimg />} alt="" />
            </div>

            <div className="imgcardheader">
              <h6>Marketing | <i><CiCalendar /></i> September 4, 2020 | <i><MdOutlineWatchLater /></i> 36 min</h6>
            </div>

            <div className="imgcardabout">
              <h3>What is traffic arbitrage and does it really make money?</h3>
              <h6>Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</h6>
            </div>

            <div className="imggo">
              <h6>Listen <i><FaLongArrowAltRight /></i></h6>
            </div>
          </div>
        </div>

        <div className="blogprew">
          <h6>1 2 3 4 <i><FaLongArrowAltRight /></i></h6>
        </div>
      </section>

      <section className="help" id="help">
        <div className="needhelp">
          <h3>Want to get the best articles weekly? Subscribe to our newsletter!</h3>
        </div>
        <div className="form">
          <form action="">
            <input type="text" placeholder="Your working email" />
          <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="accept">
          <h6><i><FaSquareCheck /></i> I agree to receive communications from Createx Online School</h6>
        </div>
      </section>
    </div>
  )
}

export default App
