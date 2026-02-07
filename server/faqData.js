const faqs = [
  {
    intent: 'greeting',
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
    response: () => (
      "Hey there 👋 How can I help you today?\n\n" +
      "You can ask about products, shipping, returns, payments, or orders."
    )
  },

  {
    intent: 'products',
    keywords: ['product', 'products', 'item', 'items', 'shop', 'catalog', 'store'],
    response: () => (
      "🛍️ We offer a wide range of products across multiple categories.\n\n" +
      "Want help finding something specific?"
    )
  },

  {
    intent: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'how much'],
    response: () => (
      "💰 Prices vary depending on the product.\n\n" +
      "Check the product page for exact pricing or ask me about a specific item."
    )
  },

  {
    intent: 'shipping',
    keywords: ['shipping', 'delivery', 'ship', 'arrive', 'how long'],
    response: () => (
      "🚚 Shipping options:\n" +
      "• Standard: 5–7 business days\n" +
      "• Express: 2–3 business days\n\n" +
      "Tracking info is sent once your order ships."
    )
  },

  {
    intent: 'tracking',
    keywords: ['track', 'tracking', 'order status', 'where is my order'],
    response: () => (
      "📦 You can track your order using the tracking link sent to your email.\n\n" +
      "Didn’t get it? I can help you contact support."
    )
  },

  {
    intent: 'returns',
    keywords: ['return', 'returns', 'refund', 'exchange', 'money back'],
    response: () => (
      "↩️ Returns are accepted within **30 days** of delivery.\n" +
      "Items must be unused and in original packaging.\n\n" +
      "Refunds are processed within 5–7 business days."
    )
  },

  {
    intent: 'payment',
    keywords: ['payment', 'pay', 'credit card', 'debit', 'paypal', 'wallet'],
    response: () => (
      "🔒 We accept all major credit/debit cards and digital wallets.\n\n" +
      "All transactions are encrypted and secure."
    )
  },

  {
    intent: 'cancel',
    keywords: ['cancel', 'cancellation', 'stop order'],
    response: () => (
      "❌ Orders can be canceled **before shipping**.\n\n" +
      "If your order already shipped, you can return it after delivery."
    )
  },

  {
    intent: 'support',
    keywords: ['contact', 'support', 'help', 'customer service'],
    response: () => (
      "📞 Need human help?\n\n" +
      "Email: support@example.com\n" +
      "Phone: 1-800-123-4567\n" +
      "Hours: Mon–Fri, 9am–6pm"
    )
  },

  {
    intent: 'thanks',
    keywords: ['thanks', 'thank you', 'thx'],
    response: () => (
      "You're welcome! 😊\n\n" +
      "Let me know if there’s anything else I can help with."
    )
  }
];

const defaultResponse = (
  "🤔 I’m not sure about that yet.\n\n" +
  "Try asking about:\n" +
  "• Products\n" +
  "• Shipping\n" +
  "• Returns\n" +
  "• Payments\n" +
  "• Order tracking"
);

module.exports = { faqs, defaultResponse };
