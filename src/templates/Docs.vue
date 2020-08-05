<template>
	<Layout>
		<div class="flex flex-wrap items-start justify-start">
			<div
				class="order-2 w-full md:w-1/3 sm:pl-4 md:pl-6 lg:pl-8 sticky"
				style="top: 4rem"
			>
				<OnThisPage />
			</div>

			<div class="order-1 w-full md:w-2/3">
				<div class="content" v-html="$page.allDocs.edges[0].node.content" />
				<!-- <div class="content" v-html="$page.allDocs.edges[0].node.content" /> -->

				<div class="mt-8 pt-8 lg:mt-12 lg:pt-12 border-t border-ui-border">
					<NextPrevLinks />
				</div>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query{
  allDocs{
    totalCount
    edges{
      node{
        id
        path
        excerpt
        description
        next
        sidebar
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {
	mounted() {
		console.log(this.$page);
	},
};
</script>
