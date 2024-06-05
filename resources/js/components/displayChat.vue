<template>
     <div class="position-relative">
        <div class="chat-messages p-4">
            <div v-for="message in allmessages">
                <div v-if="message.receiver_id == receiverUser.id && message.sender_id == senderUser.id" class="chat-message-right pb-4">
                    <div>
                        <img
                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                            class="rounded-circle mr-1"
                            alt="Chris Wood"
                            width="40"
                            height="40"
                        />
                        <div class="text-muted small text-nowrap mt-2">
                            {{ message.time.split(",")[0] }}
                        </div>
                    </div>
                    <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                        <div class="font-weight-bold mb-1">You</div>
                        {{ message.text }}
                    </div>
                </div>
                <div v-else-if="message.receiver_id == senderUser.id && message.sender_id == receiverUser.id" class="chat-message-left pb-4">
                    <div>
                        <img
                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                            class="rounded-circle mr-1"
                            alt="Sharon Lessman"
                            width="40"
                            height="40"
                        />
                        <div class="text-muted small text-nowrap mt-2">
                            {{message.time.split(",")[0]}}
                        </div>
                    </div>
                    <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                        <div class="font-weight-bold mb-1">{{ receiverUser.name }}</div>
                        {{  message.text }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            allmessages:{
                type: Object,
                required: true
            },
            receiverUser:{
                type: Object,
                required: true
            },
            senderUser:{
                type: Object,
                required: true
            }
        },
    }
</script>
