import DefaultLayout from "../../layouts/Default/DefaultLayout";

import ProductList from "../../modules/ProductList/ProductList";
import Perks from "../../modules/PerksSection/Perks"
import FAQSection from "../../modules/FAQSection/FAQSection";
import SpecialOrderSection from "../../modules/SpecialOrderSection/SpecialOrderSection";
import NewsletterSection from "../../modules/NewsletterSection/NewsletterSection";

function Home({ navigation, products, perks, faqs }) {
    const Layout = Home.Layout;
    return (
        <Layout navigation={ navigation }>
            <ProductList products={ products } />
            <SpecialOrderSection />
            <FAQSection faqs={ faqs } />
            <NewsletterSection />
            <Perks perks={ perks }  />
        </Layout>
    )
}

Home.Layout = DefaultLayout;

export default Home;