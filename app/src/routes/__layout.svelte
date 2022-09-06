<script>
	import '../app.css';
	import { Modal_v1, Modal_v2, Header_v1, Header_v2, Footer_v1, Banner_v1 } from 'symax/ui/broker';
	import { content_Footer_v1 } from '../content/footer/section_v1/index.js';
	import { content_Header_v1 } from '../content/header/section_v1/index.js';
	import { content_Header_v2 } from '../content/header/section_v2/index.js';
	import { content_Banner_v1 } from '../content/banner/section_v1/index.js';
	import { content_Modal_v2 } from '../content/modal/v2/index.js';

	const { content: header_v1 } = content_Header_v1;
	const { content: header_v2 } = content_Header_v2;
	const { content: footer_v1 } = content_Footer_v1;
	const { content: banner_v1 } = content_Banner_v1;
	const { content: modal_v2 } = content_Modal_v2;
</script>

<!--<Banner_v1 {...banner_v1}/>-->
<Header_v1 {...header_v1} />
<Header_v2 {...header_v2} />
<main>
	<slot />
</main>
<Footer_v1 {...footer_v1} />
<Modal_v1 />
<Modal_v2 {...modal_v2} />
