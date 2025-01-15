<template>
    <div>
        <CustomCursor />
        <NavBar />
        <div class="w-screen h-20 bg-white"></div>
        <div class="w-screen h-screen content-center z-10 bg-white flex items-center">
            <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 lg:gap-16 mb-16 md:mb-32">
                <div class="h-full col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2 flex flex-col space-y-4">
                    <ButtonIconExternal 
                        link="https://www.linkedin.com/in/maxiswright/"
                        icon-pack="fab"
                        icon-name="linkedin"
                        label="LinkedIn"
                    ></ButtonIconExternal>
                </div>
                <div class="notch notch-border h-full col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2 bg-black p-4 flex items-center">
                    <form
                        name="contact"
                        action="/success"
                        method="POST"
                        netlify-honeypot="favoritecolor"
                        data-netlify="true"
                        class="font-main w-full flex flex-col"
                        >
                        <input type="hidden" name="form-name" value="contact" />
                        <p class="-z-10 max-h-0 opacity-0 pointer-events-none" tabindex="-1">
                            <label class="max-h-0 opacity-0 pointer-events-none" tabindex="-1">
                            Don’t fill this out if you’re human: <input name="favoritecolor" class="max-h-0 opacity-0 pointer-events-none" tabindex="-1" />
                            </label>
                        </p>
                        <p class="w-full flex flex-col text-grayLightPrimary text-sm mb-8 gap-1">
                            <label for="email">Email —</label>
                            <input id="email" type="email" maxlength="320" name="email" class="rounded-sm text-base text-grayDarkest p-2" required>
                        </p>
                        <p class="w-full flex flex-col text-grayLightPrimary text-sm mb-8 gap-1">
                            <label for="subject">Subject —</label>
                            <input id="subject" type="text" maxlength="100" name="subject" class="rounded-sm text-base text-grayDarkest p-2" required>
                        </p>
                        <p class="w-full flex flex-col text-grayLightPrimary text-sm mb-8 gap-1">
                            <label for="message">Message —</label>
                            <textarea 
                                id="message" 
                                v-model="messageText" 
                                name="message" 
                                maxlength="500" 
                                class="rounded-sm text-base text-grayDarkest p-2" 
                                required 
                                @input="updateCharacterCount">
                            </textarea>
                            <span 
                                id="characterCount" class="w-full flex flex-row justify-end text-xs"
                                :class="{'text-whiteFaded': characterCount < 490, 'text-bad': characterCount >= 490}">
                                {{ characterCount }}/500
                            </span>
                        </p>
                        <p class="w-full flex justify-end">
                            <span class="notch w-max h-10 flex place-items-center bg-white">
                                <button type="submit" class="button h-full px-4 flex place-items-center sweep-hover">Send</button>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
        <PreFooter :currentProjectId="'1'" :linksVisibility="[false, true, true, false]" />
        <FooterSection />
    </div>
</template>
  
<script>
export default {
    name: 'ContactPage',
    data() {
        return {
            messageText: '',  // This holds the text of the message.
            characterCount: 0 // This keeps track of the number of characters.
        };
    },
    head: {
      title: 'Contact Max',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Max's new, rebuilt portfolio website. Max is a versatile product designer with a talent for visual design and product + systems thinking / eager to tackle complex challenges and craft user-focused digital experiences. This website was built with plain HTML, CSS, and JS, and ChatGPT was used to convert the entire site for Nuxt.JS, including project initiation, folder management, using terminal, script changes, incorporating JSON, and problem fixes."
        }
      ],
    },
    methods: {
        updateCharacterCount() {
            this.characterCount = this.messageText.length; // Updates the count based on the current text length.
        }
    },
}
</script>

<style scoped>
.sweep-hover {
  background: linear-gradient(#00AB8F 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
  transform: scale(1) rotate(0deg);
  color: #505050;
  transition: transform 0.4s, background-size 0.4s, background-position 0s, color 0.4s;
}

.sweep-hover:hover {
  --p: 100%;
  color: #FFFFFF;
}
</style>