import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';

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
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
