<script lang="ts">
	import { t } from 'svelte-intl-precompile';
	import Section from '$components/Section.svelte';
	import CopyBlock from '$components/CopyBlock.svelte';
	import HomepageHero from '$components/HomepageHero.svelte';
	import Column from '$components/layout/Column.svelte';
	import Row from '$components/layout/Row.svelte';
	import Link from '$components/Link.svelte';
	import WideCard from '$components/WideCard.svelte';
	import ArticleCarousel from '$components/ArticleCarousel.svelte';
	import Image from '$components/Image.svelte';
	import InteractiveEditor from '$components/InteractiveEditor/InteractiveEditor.svelte';

	import image2D from '$assets/images/2d.png';
	import image3D from '$assets/images/3d.jpg';
	import imageLanguage from '$assets/images/language.png';

	export let posts = [];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<HomepageHero title={$t('homepage.hero.title')}>
	<p slot="body">{$t('homepage.hero.body')}</p>

	<Link slot="footer" type="button" href="/download">
		{$t('global.download')}
	</Link>
</HomepageHero>

<Section>
	<Row>
		<Column cols="1 / span 2">
			<InteractiveEditor />
		</Column>
		<Column cols="3 / span 2">
			<CopyBlock
				supertext={$t('homepage.powerful_tools.supertext')}
				title={$t('homepage.powerful_tools.title')}
			>
				<p slot="body">
					{$t('homepage.powerful_tools.body')}
				</p>
				<Link slot="footer">
					{$t('global.learn_more')}
				</Link>
			</CopyBlock>
		</Column>
	</Row>
</Section>

<Section>
	<Row alignItems="flex-start">
		<Column cols="1 / span 2">
			<CopyBlock title="Dedicated 2D engine">
				<Image slot="image" src={image2D} bordered />
				<p slot="body">
					Build crisp and performant 2D games with Godot's dedicated 2D rendering engine with real
					2D pixel coordinates and 2D nodes. Don't settle for bolted on 2D.
				</p>
				<Link slot="footer">
					{$t('global.learn_more')}
				</Link>
			</CopyBlock>
		</Column>
		<Column cols="3 / span 2">
			<CopyBlock title="Simple and powerful 3D">
				<Image slot="image" src={image3D} bordered />
				<p slot="body">
					Godot's 3D nodes give you everything you need to build, animate, and render your 3D worlds
					and characters.
				</p>
				<Link slot="footer">
					{$t('global.learn_more')}
				</Link>
			</CopyBlock>
		</Column>
	</Row>
</Section>

<Section>
	<Row>
		<Column cols="1 / span 2">
			<CopyBlock supertext="Polyglot tool" title="Use the right language for the job">
				<p slot="body">
					Keep your code modular with an Object oriented API using Godot's own GDScript, C#, C++, or
					bring your own using GDNative. With Cross-language scripting, you can get the best of all
					worlds by writing expressive code in GDScript, and performance critical pieces in C# or
					C++.
				</p>
				<Link slot="footer">
					{$t('global.learn_more')}
				</Link>
			</CopyBlock>
		</Column>
		<Column cols="3 / span 2">
			<Image src={imageLanguage} bordered animate />
		</Column>
	</Row>
</Section>

<Section>
	<Row>
		<Column cols="1/span 4">
			<WideCard>
				<h2 slot="left">Godot is 100% free and fully Open Source</h2>
				<div slot="right">
					<p>
						Godot is completely free and open-source under the permissive MIT license. Your game is
						yours, down to the last line of engine code. No royalties, no strings attached.
					</p>
					<Link type="button">
						{$t('global.learn_more')}
					</Link>
				</div>
			</WideCard>
		</Column>
	</Row>
</Section>

<Section>
	<Row>
		<Column cols="1/span 4">
			<ArticleCarousel supertext="News" title="See what's new with Godot" {posts} />
		</Column>
	</Row>
</Section>
