import { ref, onUnmounted } from 'vue'
import firebase from 'firebase/app'
import { useAuth } from '@vueuse/firebase'
import 'firebase/auth'
import 'firebase/firestore'
import { useFirestore } from '@vueuse/firebase'

import { firebaseConfig } from '~/config/firebase'

firebase.initializeApp(firebaseConfig)

const { auth, firestore } = firebase
const { GoogleAuthProvider } = auth
const db = firestore()

const { isAuthenticated, user } = useAuth()

export const authentication = () => {
  const googlePopup = () => auth().signInWithPopup(new GoogleAuthProvider())
  const signOut = () => auth().signOut()
  return { googlePopup, signOut, isAuthenticated, user }
}

export const database = (movieId) => {
  const messages = ref([])

  const messagesCollection = db.collection('messages')
  const messagesQuery = messagesCollection
    .where('movieId', '==', movieId)
    .orderBy('createdAt', 'asc')

  const unsubscribe = messagesQuery.onSnapshot((s) => {
    messages.value = s.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })

  onUnmounted(unsubscribe)

  const sendMessage = async (text) => {
    if (!isAuthenticated.value) return
    const { uid, displayName } = user.value
    await messagesCollection.add({
      userName: displayName,
      userId: uid,
      movieId,
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  return { messages, sendMessage }
}
