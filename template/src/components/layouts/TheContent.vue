<template>
    <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
            <div style="min-height: 600px">
                <router-view></router-view>
            </div>
        </Card>
    </Content>    
</template>

<script>
export default {};
</script>
