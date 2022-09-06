<script>
	import { Blog_v1, Main_v1, Marketing_v1, Marketing_v2 } from 'symax/ui/broker';
	export let contentMain_v1;
	export let contentMarketing_v1;
	export let contentBlog_v1;
	export let contentMarketing_v2;
</script>

<Main_v1 {...contentMain_v1} />
<Marketing_v1 {...contentMarketing_v1} />
<Marketing_v2 {...contentMarketing_v2} />
<Blog_v1 {...contentBlog_v1} />
