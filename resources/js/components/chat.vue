<!--<script setup>-->
<!--import { ref } from 'vue'-->

<!--const counter = ref(0)-->
<!--</script>-->

<template>
    <!-- {{ userName }} -->
    <main class="content">
        <div class="container p-0">
            <h1 class="h3 mb-3">Messages</h1>
            <div class="card">
                <div class="row g-0">
                    <div class="col-12 col-lg-5 col-xl-3 border-right">
                        <div class="px-4 d-none d-md-block">
                            <div class="d-flex align-items-center">
                                <div class="flex-grow-1">
                                    <input
                                        type="text"
                                        class="form-control my-3"
                                        placeholder="Search..."
                                    />
                                </div>
                            </div>
                        </div>
                        <div v-for="u in users" :key="u.id">
                            <a
                                href="#"
                                class="list-group-item list-group-item-action border-0"
                                v-if="u.id != currentUser.id"
                                @click="
                                    getAllMessages(),
                                    clearMessageN(u.id)
                                "
                                @click.prevent="selectUser(u.id)"
                            >
                                <div v-if="messageN[u.id]!=0" class="badge bg-success float-right" style="color: white;">{{ messageN[u.id] }}</div>
                                <div  class="d-flex align-items-start">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                        class="rounded-circle mr-1"
                                        alt="Vanessa Tucker"
                                        width="40"
                                        height="40"
                                    />
                                    <div class="flex-grow-1 ml-3">
                                        {{ u.name }}
                                        <div class="small">
                                            <span class="fas fa-circle chat-online"></span> Online
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <hr class="d-block d-lg-none mt-1 mb-0" />
                    </div>
                    <div class="col-12 col-lg-7 col-xl-9" v-if="chatUser.name != null">
                        <div class="py-2 px-4 border-bottom d-none d-lg-block">
                            <div class="d-flex align-items-center py-1">
                                <div class="position-relative">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                        class="rounded-circle mr-1"
                                        alt="Sharon Lessman"
                                        width="40"
                                        height="40"
                                    />
                                </div>
                                <div class="flex-grow-1 pl-3">
                                    <strong>{{ chatUser.name }}</strong>
                                    <div class="text-muted small"><em>Typing...</em></div>
                                </div>
                                <div>
                                    <button class="btn btn-primary btn-lg mr-1 px-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-phone feather-lg"
                                        >
                                            <path
                                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                            ></path>
                                        </svg>
                                    </button>
                                    <button
                                        class="btn btn-info btn-lg mr-1 px-3 d-none d-md-inline-block"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-video feather-lg"
                                        >
                                            <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                            <rect
                                                x="1"
                                                y="5"
                                                width="15"
                                                height="14"
                                                rx="2"
                                                ry="2"
                                            ></rect>
                                        </svg>
                                    </button>
                                    <button class="btn btn-light border btn-lg px-3">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-more-horizontal feather-lg"
                                        >
                                            <circle cx="12" cy="12" r="1"></circle>
                                            <circle cx="19" cy="12" r="1"></circle>
                                            <circle cx="5" cy="12" r="1"></circle>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <displayChat :allmessages="messages" :receiverUser="chatUser" :senderUser="currentUser"/>
                        <div class="flex-grow-0 py-3 px-4 border-top">
                            <form method="post" v-on:submit.prevent="Message" class="input-group">
                                <input
                                    type="text"
                                    v-model="text"
                                    class="form-control"
                                    placeholder="Type your message"
                                />
                                <button class="btn btn-primary">Send</button>
                            </form>
                            <!-- <div class="input-group">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Type your message"
                                />
                                <button class="btn btn-primary">Send</button>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    import axios from "axios";
    import displayChat from './displayChat.vue';
    export default {
        components:{
            displayChat,
        },
        props:{
            userId: Number,
        },
        data(){
            return{
                text: '',
                users: [],
                messageN: {},
                messages: {},
                currentUser: {},
                chatUser: {},
            }
        },
        name: "ChatModule",
        methods: {
            // getMessages: async() => {
            //     try {
            //         const m = await axios.get(`${rootUrl}/messages`);
            //         setMessages(m.data);
            //         setTimeout(scrollToBottom, 0);
            //     } catch (err) {
            //         console.log(err.message);
            //     }
            // },
            connectWebSocket() {
                // console.log('connecting')
                window.Echo.private("channel_for_everyone")
                    .listen('GotMessage', async (e) => {
                        // console.log(e.message.sender_id)
                        var user = this.users.find(user => user.id === e.message.receiver_id);
                        // alert(e.message.text)
                        // await getMessages();
                        if(user){
                            if (this.messageN.hasOwnProperty(user.id)) {
                                this.messageN[user.id] = (this.messageN[user.id] || 0) + 1;
                            } else {
                                this.messageN[user.id] = 1;
                            }
                        }
                        this.getLastMessage();
                    });
            },
            async GetAllUser(){
                const res = await axios.get('/api/users');
                // console.log((await res).data);
                this.users = res.data;
                console.log(this.users);
            },
            Message(){
                axios.post('/api/message',{
                    sender_id: this.currentUser.id,
                    receiver_id: this.chatUser.id,
                    text: this.text,
                }).catch(response => {
                    console.log(response);
                });
                this.text = "";
            },
            async GetUser(){
                for (var u of this.users) {
                    if(u.id == this.userId){
                        this.currentUser = u;
                        // console.log(this.currentUser);
                        break;
                    }
                };
            },
            selectUser(id){
                this.chatUser = this.users.find(user => user.id == id);
                // console.log(this.chatUser);
            },
            getAllMessages(){
                axios.get('/api/messages').then((res)=>{
                    this.messages = res.data;
                    console.log(this.messages);
                }).catch((res)=>{
                    console.log(res);
                })
            },
            getLastMessage(){
                axios.get('/api/messageL').then((res)=>{
                    this.messages = this.messages.concat(res.data.message);
                }).catch((res)=>{
                    console.log(res);
                });
            },
            clearMessageN(userId){
                if(this.messageN.hasOwnProperty(userId)){
                    this.messageN[userId] = 0;
                }
            }
        },
        async mounted() {
            await this.GetAllUser();
            await this.GetUser();
            this.connectWebSocket();

        }
    }
</script>
