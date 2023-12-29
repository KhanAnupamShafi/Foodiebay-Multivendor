import IMG1 from '../../assets/About/11.png';
import IMG2 from '../../assets/About/22.png';
import IMG3 from '../../assets/About/33.png';
import IMG4 from '../../assets/About/tbg.png';
import IMG5 from '../../assets/Login/default_pic.jpg';
import { VendorContainer } from '../VendorList/VendorList';

function About() {
  return (
    <VendorContainer>
      <section className="lg:py-16 py-6">
        <div className="container">
          <div className="grid lg:grid-cols-2 items-start gap-10">
            <div className="flex items-center justify-center h-full w-full bg-orange-500/5 rounded-lg">
              <img src={IMG4} className="h-full w-full" alt="" />
            </div>
            <div className="">
              <span className="inline-flex py-2 px-3 text-sm text-red-500 rounded-full bg-red-200/20 mb-6">
                About Us
              </span>
              <h2 className="text-3xl font-semibold text-default-900 max-w-xl mb-6">
                Where quality food meet Excellent services.
              </h2>
              <p className="text-default-500 font-medium max-w-2xl mb-16 xl:mb-20">
                It’s the perfect dining experience where every dish is
                crafted with fresh, high-quality ingredients and
                served by friendly staff who go.
              </p>

              <div className="grid xl:grid-cols-3 sm:grid-cols-2 gap-6">
                <div className="cursor-pointer bg-transparent rounded-md shadow-lg border border-red-100 hover:border-red-500 transition-all duration-200">
                  <div className="p-4">
                    <div className="mb-6">
                      <img src={IMG1} alt="" />
                    </div>
                    <h3 className="text-lg font-medium text-default-900 mb-6">
                      Fast Foods
                    </h3>
                    <p className="text-sm text-default-500">
                      Healthy Foods are nutrient-Dense Foods
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer bg-transparent rounded-md shadow-lg border border-red-100 hover:border-red-500 transition-all duration-200">
                  <div className="p-4">
                    <div className="mb-6">
                      <img src={IMG2} alt="" />
                    </div>
                    <h3 className="text-lg font-medium text-default-900 mb-6">
                      Healthy Foods
                    </h3>
                    <p className="text-sm text-default-500">
                      Healthy Foods are nutrient-Dense Foods
                    </p>
                  </div>
                </div>
                <div className="cursor-pointer bg-transparent rounded-md shadow-lg border border-red-100 hover:border-red-500 transition-all duration-200">
                  <div className="p-4">
                    <div className="mb-6">
                      <img src={IMG3} alt="" className="-mt-2" />
                    </div>
                    <h3 className="text-lg font-medium text-default-900 mb-6">
                      Fast Delivery
                    </h3>
                    <p className="text-sm text-default-500">
                      Healthy Foods are nutrient-Dense Foods
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center md:justify-start justify-center gap-4 mt-10">
                <a
                  href="/"
                  className="py-3 px-10 font-medium text-white bg-error rounded-full hover:bg-primary-500 transition-all">
                  Get started
                </a>
                <div className="flex items-center gap-2">
                  <img
                    src={IMG5}
                    alt=""
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="">
                    <h6 className="text-base font-medium text-default-900">
                      Anupam
                    </h6>
                    <p className="text-sm font-medium text-default-500">
                      Founder CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </VendorContainer>
  );
}

export default About;
