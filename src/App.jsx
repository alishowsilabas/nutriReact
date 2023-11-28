import { useState, useEffect } from 'react';

import './style.css';

// https://sujeitoprogramador.com/rn-api/?api=posts

const App = () => {
	const [nutri, setNutri] = useState([]);

	useEffect(() => {
		function loadApi() {
			let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

			fetch(url)
				.then((r) => r.json())
				.then((json) => {
					console.log(json);
					setNutri(json);
				});
		}
		loadApi();
	}, []);

	return (
		<div className="container">
			<header className={'myHeader'}>
				<strong>React Nutri</strong>
			</header>

			{nutri.map((item) => {
				return (
					<article key={item.id} className={'post'}>
						<strong className="titulo">{item?.titulo}</strong>
						<img src={item?.capa} alt="Mesa com alimentos variados, leite, legumes, queijos, etc" />
						<p className={'subtitulo'}>{item?.subtitulo}</p>
						<a className={'contentButton'} href="">
							Acessar conteúdo completo
						</a>
					</article>
				);
			})}
		</div>
	);
};

export default App;
