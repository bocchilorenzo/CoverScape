import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
            dark: {
                primary: '#FEAB2E',
                primaryCard: '#182e57',
                danger: colors.red,
                secondary: '#D81B60',
                sheet: colors.grey.darken4,
            },
        },
    },
})
