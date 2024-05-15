import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <>
      {" "}
      <footer className="bg-white h-20 relative">
        <div className="border-t border-gray-200" />
        <MaxWidthWrapper>
          <div className="h-full flex flex-col mt-5 md:flex-row md:justify-between justify-center items-center">
            <div className="text-center md:text-left pb-2 md:pb-0">
              <p className="tetx-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All rights reserved
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex space-x-8">
                <Link
                  href={"https://sourav-c-portfolio.netlify.app"}
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Terms
                </Link>
                <Link
                  href={"https://sourav-c-portfolio.netlify.app"}
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Privacy Policy
                </Link>
                <Link
                  href={"https://sourav-c-portfolio.netlify.app"}
                  className="text-sm text-muted-foreground hover:text-gray-600"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
      {/* <div className="flex justify-center">
        <Link
          href={"https://sourav-c-portfolio.netlify.app"}
          className="text-sm underline text-muted-foreground hover:text-gray-600"
        >
          Developed by Sourav
        </Link>
      </div> */}
    </>
  );
};

export default Footer;
