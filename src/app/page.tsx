import About from '@/components/home_page/About';
import Contacts from '@/components/home_page/Contacts';
import Header from '@/components/home_page/Header';
import Projects from '@/components/home_page/Projects';
import ProviderLayout from '@/components/ProviderLayout';
import Skills from '@/components/home_page/Skills';
import Footer from '@/components/home_page/Footer';

export default function Home() {
	return (
		<main className="min-h-screen">
			<Header />
			<About />
			<ProviderLayout>
				<Projects />
				<Skills />
			</ProviderLayout>
			<Contacts />
            <Footer />
		</main>
	);
}
