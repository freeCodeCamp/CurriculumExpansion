# User Stories

1. Your page should have an `h1` element with the text `Pricing Plans`.
1. Your page should have three `div` elements with the class `pricing-card` to represent the pricing plans.

   - One of your `div` elements should have the class `pro-plan` in addition to the `pricing-card` class.
   - One of your `div` elements should have the class `basic-plan` in addition to the `pricing-card` class.
   - One of your `div` elements should have the class `premium-plan` in addition to the `pricing-card` class.

1. Each of your `.pricing-card` elements should use Flexbox to stack its content in a column and justify the space between the children using `space-between`. Each element should also set the `flex` property to `0 0 200px` to give it a consistent width and prevent it from growing or shrinking in the layout.
1. The `basic-plan` element should appear first in the layout. You should use the `order` property for this.
1. The `pro-plan` element should appear second in the layout. You should use the `order` property and set its `flex-grow` property to `2` so it takes up more space than the other plans.
1. The `premium-plan` element should come last in the layout. You should use the `order` property for this.
