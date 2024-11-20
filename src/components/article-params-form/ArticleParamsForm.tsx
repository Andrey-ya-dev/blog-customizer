import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

export const ArticleParamsForm = () => {
	const asideRef = useRef(null);

	const [isFormOpen, setIsFormOpen] = useState(false);

	const [formState, setFormState] = useState(defaultArticleState);

	const [fontFamilyValue, setFontFamilyValue] = useState(
		defaultArticleState.fontFamilyOption
	);
	const [fontSizeValue, setFontSizeValue] = useState(
		defaultArticleState.fontSizeOption
	);
	const [fontColorValue, setFontColorValue] = useState(
		defaultArticleState.fontColor
	);
	const [bgColorValue, setbgColorValue] = useState(
		defaultArticleState.backgroundColor
	);
	const [contentWidthValue, setContentWidthValue] = useState(
		defaultArticleState.contentWidth
	);

	const selectFontFamily = (value: OptionType) => {
		setFontFamilyValue({ ...fontFamilyValue, ...value });
		setFormState({ ...formState, fontFamilyOption: value });
	};
	const selectFontSize = (value: OptionType) => {
		setFontSizeValue({ ...fontSizeOptions, ...value });
		setFormState({ ...formState, fontSizeOption: value });
	};
	const selectFontColor = (value: OptionType) => {
		setFontColorValue({ ...fontColorValue, ...value });
		setFormState({ ...formState, fontColor: value });
	};
	const selectBgColor = (value: OptionType) => {
		setbgColorValue({ ...bgColorValue, ...value });
		setFormState({ ...formState, backgroundColor: value });
	};
	const selectContentWidth = (value: OptionType) => {
		setContentWidthValue({ ...contentWidthValue, ...value });
		setFormState({ ...formState, contentWidth: value });
	};

	const toggleFormOpen = () => {
		setIsFormOpen(!isFormOpen);
	};

	useOutsideClickClose({
		rootRef: asideRef,
		isOpen: isFormOpen,
		onChange: setIsFormOpen,
	});

	return (
		<>
			<ArrowButton isOpen={isFormOpen} onClick={toggleFormOpen} />
			<aside
				ref={asideRef}
				className={clsx(styles.container, isFormOpen && styles.container_open)}>
				<form className={styles.form}>
					<Text weight={800} size={31} uppercase>
						Задайте параметры
					</Text>

					<Select
						options={fontFamilyOptions}
						title='шрифт'
						selected={fontFamilyValue}
						onChange={selectFontFamily}
					/>

					<RadioGroup
						title='рАЗМЕР шрифта'
						options={fontSizeOptions}
						selected={fontSizeValue}
						name='font-size-group'
						onChange={selectFontSize}
					/>

					<Select
						options={fontColors}
						title='Цвет шрифта'
						selected={fontColorValue}
						onChange={selectFontColor}
					/>

					<Separator />

					<Select
						options={backgroundColors}
						title='Цвет фона'
						selected={bgColorValue}
						onChange={selectBgColor}
					/>

					<Select
						options={contentWidthArr}
						title='Ширина контента'
						selected={contentWidthValue}
						onChange={selectContentWidth}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
