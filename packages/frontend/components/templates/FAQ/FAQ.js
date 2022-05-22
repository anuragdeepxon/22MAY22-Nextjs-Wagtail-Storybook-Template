import FAQSection from "../../modules/FAQSection/FAQSection";

import DefaultLayout from "../../layouts/Default/DefaultLayout";


function FAQ({ navigation, faqs }) {
    const Layout = FAQ.Layout;
    return (
        <Layout navigation={ navigation }>
            <FAQSection faqs={ faqs } />
        </Layout>
    )
}

FAQ.Layout = DefaultLayout;

export default FAQ;