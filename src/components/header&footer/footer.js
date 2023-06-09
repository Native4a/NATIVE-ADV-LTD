import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Container from "../container"
import * as styles from "../../styles/footer.module.css"
import useFooter from "../../hook/useFooter"

const Footer = () => {
  const footer = useFooter();
  return (
    <div>
      {footer.map((item, index) => {
        const {
          title,
          buttonName,
          native4aLogo,
          copyRight,
          googlePartnerImage} = item;
        return (
          <Container as="footer" key={index}>
            {/* Block Comments */}
            <section className={styles.container}>
              <div className="grid grid-rows-2 items-center my-10 md:my-20">
                <h2 className="text-center text-2xl md:text-4xl">{title}</h2>
                <div className="rounded-t-lg overflow-hidden text-center p-0 md:p-4 mt-3">
                  <AnchorLink to="#contactAs">
                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-6 border border-blue-700 rounded text-base">{buttonName}</button>
                  </AnchorLink>
                </div>
              </div>
            </section>
            <section className="bg-neutral-200 pt-5 md:pt-0 pb-20 md:py-0 px-5 md:px-11">
              <div class="grid grid-cols-3 gap-1 items-center">
                <div class="container mx-auto col-span-2">
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
                    <div className="">
                      <img className="rounded-sm w-28 md:w-48 m-0" src={native4aLogo.url} alt="service_Video_Production" />
                    </div>
                    <div className="col-span-2 flex md:top-0">
                      <p className="col-span-4 flex text-[10px] md:text-base items-center">{renderRichText(copyRight)}</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <img className="rounded-sm w-48 float-right" src={googlePartnerImage.url} alt="service_Video_Production" />
                </div>
              </div>
            </section>
          </Container>
        );
      })}
    </div>
  );
}

export default Footer