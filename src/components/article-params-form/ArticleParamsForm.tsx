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
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';

export const ArticleParamsForm = () => {
	const asideRef = useRef(null);
	const [isFormOpen, setIsFormOpen] = useState(false);

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
						selected={fontFamilyOptions[0]}
					/>

					<RadioGroup
						title='рАЗМЕР шрифта'
						options={fontSizeOptions}
						selected={fontSizeOptions[0]}
						name='font-size-group'
					/>

					<Select
						options={fontColors}
						title='Цвет шрифта'
						selected={fontColors[0]}
					/>

					<Separator />

					<Select
						options={backgroundColors}
						title='Цвет фона'
						selected={backgroundColors[0]}
					/>

					<Select
						options={contentWidthArr}
						title='Ширина контента'
						selected={contentWidthArr[0]}
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
