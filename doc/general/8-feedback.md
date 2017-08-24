# System Feedback
System feedback elements should be used to inform user about important system actions.

![Example](src/style/assets/feed-ex1.jpg)
<p>Inform about finished/successful actions.</p>

![Example](src/style/assets/feed-ex2.jpg)
<p>Inform about system errors.</p>

![Example](src/style/assets/feed-ex3.jpg)
<p>Inform about input errors (ex. wrong data format).</p>

![Example](src/style/assets/feed-ex4.jpg)
<p>Skip obvious information.</p>

## Feedback Categories
### Neutral
General information

<h3 style="color:#F44F41">Error</h3>
Information about system problem

<h3 style="color:#1EB234">Success</h3>
Information about successful or finished activity

<h3 style="color:#FF9C0F">Warning</h3>
Information about action that can be potentially harmful

## Feedback forms
### Contextual Feedback
It is short feedback (text, icon) shown next to the linked area when feedback action occurs. It can be show for a short time (ex. 3 seconds) or it can stay until it is relevant.

Option to provide feedback next to associated element should be considered as default. Consider alternatives only if contextual feedback is not possible or not linked with any screen area.

![Example](src/style/assets/feedback1.jpg)

### Notifications
Used for general system feedback.

![Example](src/style/assets/feedback2.jpg)

For more info, check [Notifications](../#/components/notification).

### Modal Window
Used when system feedback breaks user activity and using a system can’t be continued without getting an info or making a decision.

![Example](src/style/assets/feedback3.jpg)

For more info, check [Overlays](../#/general/7-overlays).
