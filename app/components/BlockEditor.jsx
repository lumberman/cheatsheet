import React from 'react';
import {
	BlockEditorProvider,
	BlockList,
	WritingFlow,
	ObserveTyping
} from '@wordpress/block-editor';

import { Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';

// Make sure to load the block editor stylesheets too
import '@wordpress/block-editor/build-style/style.css';
import '@wordpress/block-library/build-style/style.css';
import '@wordpress/block-library/build-style/editor.css';
import '@wordpress/block-library/build-style/theme.css';
import '@wordpress/components/build-style/style.css';
// Not 100% sure if these styles all needed:
import '@wordpress/editor/build-style/style.css';
import '@wordpress/format-library/build-style/style.css';
import '@wordpress/nux/build-style/style.css';
import '@wordpress/edit-post/build-style/style.css';


const BlockEditor = () => {

	const [ blocks, updateBlocks ] = useState( [] );

	return (
		<BlockEditorProvider
			value={ blocks }
			onInput={ updateBlocks }
			onChange={ updateBlocks }
		>
			<WritingFlow>
				<ObserveTyping>
					<BlockList __experimentalUIParts={ { hasPopover: false, hasSelectedUI: false } } />
				</ObserveTyping>
			</WritingFlow>
			<Popover.Slot />
		</BlockEditorProvider>
	);
}

export default BlockEditor;
