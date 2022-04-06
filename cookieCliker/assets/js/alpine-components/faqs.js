
export default (selectedAnswer = null) => ({
    selectedAnswer: selectedAnswer,

    toggleAnswer(e) {
        if (e.target.getAttribute('data-toggled') === this.selectedAnswer) {
            this.selectedAnswer = null
            return
        }

        this.selectedAnswer = e.target.getAttribute('data-toggled')
    },
    isToggled(answer) {
        if (this.selectedAnswer !== answer) {
            return ''
        }

        return `max-height: ${this.$refs[`answer${answer}`].scrollHeight}px`
    }
})