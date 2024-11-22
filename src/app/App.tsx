import { CSSProperties, useState } from 'react';

import styles from '../styles/index.module.scss';
import { Article } from 'src/components/article';
import { ArticleParamsForm } from 'src/components/article-params-form';
import { defaultArticleState, OptionType } from 'src/constants/articleProps';

export type TPageStyle = {
	fontFamilyOption: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
	fontSizeOption: OptionType;
};

export const App = () => {
	const [pageState, setPageState] = useState(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': pageState.fontFamilyOption.value,
					'--font-size': pageState.fontSizeOption.value,
					'--font-color': pageState.fontColor.value,
					'--container-width': pageState.contentWidth.value,
					'--bg-color': pageState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				getChangedStyle={setPageState}
				defaultPageStyle={defaultArticleState}
			/>
			<Article />
		</main>
	);
};
