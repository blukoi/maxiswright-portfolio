<template>
    <div 
      :class="['custom-cursor', { 'custom-cursor--link': isLinkHovered }, { 'custom-cursor--input': isLinkHoveredInput }]"
      :style="cursorStyle"
    ></div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mouseX: 0,
        mouseY: 0,
        isLinkHovered: false,
        isLinkHoveredInput: false,
        initCursor: false,
      };
    },
    computed: {
      cursorStyle() {
        return {
          top: `${this.mouseY}px`,
          left: `${this.mouseX}px`,
          opacity: this.initCursor ? 1 : 0,
          transition: 'opacity 0.3s ease, transform 0s'
        };
      }
    },
    mounted() {
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseover', this.handleMouseOver);
      document.addEventListener('mouseout', this.handleMouseOut);
      document.addEventListener('mouseover', this.handleMouseOverInput);
      document.addEventListener('mouseout', this.handleMouseOutInput);
    },
    beforeDestroy() {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseover', this.handleMouseOver);
      document.removeEventListener('mouseout', this.handleMouseOut);
      document.removeEventListener('mouseover', this.handleMouseOverInput);
      document.removeEventListener('mouseout', this.handleMouseOutInput);
    },
    methods: {
      handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        if (!this.initCursor) {
          this.initCursor = true;
        }
      },
      handleMouseOver(e) {
        // Check if the mouse is over an element within an <a> tag
        this.isLinkHovered = !!e.target.closest('a, button', 'label', '.button');
      },
      handleMouseOut(e) {
        // Ensure mouse out is considered only if it leaves an <a> tag
        if (e.target.closest('a, button', 'label', '.button') && (!e.relatedTarget || !e.relatedTarget.closest('a, button', 'label', '.button'))) {
          this.isLinkHovered = false;
        }
      },
      handleMouseOverInput(e) {
        this.isLinkHoveredInput = !!e.target.closest('input, textarea');
      },
      handleMouseOutInput(e) {
        if (e.target.closest('input, textarea') && (!e.relatedTarget || !e.relatedTarget.closest('input, textarea'))) {
          this.isLinkHoveredInput = false;
        }
      }
    }
  }
  </script>  

<style scoped>
    .custom-cursor {
        position: fixed;
        pointer-events: none;
        mix-blend-mode: difference;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #FF5470;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }
    .custom-cursor--link {
        border-radius: 0;
    }
    .custom-cursor--input {
        border-radius: 0;
        width: 12px;
    }
    .cursor-hide {
        cursor: none;
    }
</style>  