<template>
    <v-container>
        <v-row
            justify="center"
            content="center"
        >
            <v-col
                cols="12"
                md="8"
            >
                <v-card>
                    <v-card-title>
                        <h2>Create New Thread</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                    label="title"
                                    name="title"
                                    type="text"
                                    outlined
                                    v-model="formData.title"
                            ></v-text-field>
                            <v-textarea
                                    outlined
                                    v-model="formData.content"
                                    name="content"
                                    label="Content"
                                    value=""
                            ></v-textarea>
                            <v-select
                                label="Channel"
                                outlined
                                v-model="formData.channel_id"
                                :items="channels"
                                item-text="name"
                                item-value="id"
                            ></v-select>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                            replace
                            color="pink"
                            dark
                            @click="createThread"
                        >
                            Submit
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {channelsListRequest} from "@/requests/Channels";
    import {createNewThreadRequest} from "@/requests/Threads";

    export default {
        name: "CreateThread",
        data: () => ({
            formData: {
              title: null,
              content: null,
              channel_id: null,
            },
            channels: null
        }),
        methods: {
            fetchChannelList() {
                channelsListRequest().then(res => {
                    this.channels = res.data
                })
            },
            createThread() {
                createNewThreadRequest(this.formData).then(res => {
                    this.$router.push('/');
                })
            }
        },

        mounted() {
            this.fetchChannelList()
        }
    }
</script>

<style scoped>

</style>