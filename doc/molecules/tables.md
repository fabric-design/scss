# Tables

## Default Table
Default table provides an alternating row background color to increase usability for wide tables.
Rows also have a hover effect to indicate click interactions.
Limit the number of rows to 10 and use pagination to view further data.
Except it is nessecary to have an overview about a larger amounts of data,
then it’s allowed to use a fixed table header with scrollable body.

<table>
    <thead>
        <tr>
            <th>
                <label>Name</label>
            </th>
            <th>
                <label>Type</label>
            </th>
            <th>
                <label>Owner</label>
            </th>
            <th>
                <label>Team</label>
            </th>
            <th>
                <label>Price</label>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Topic name 10</td>
            <td>Bug</td>
            <td>Selina Kyle</td>
            <td>Tooling</td>
            <td>4.500,00</td>
        </tr>
        <tr>
            <td>Topic name 9</td>
            <td>Refactoring</td>
            <td>Pamela Isley</td>
            <td>Tooling</td>
            <td>3.239,00</td>
        </tr>
        <tr>
            <td>Topic name 8</td>
            <td>Work package</td>
            <td>Solomon Grundy</td>
            <td>Tooling</td>
            <td>46,80</td>
        </tr>
        <tr>
            <td>Topic name 7</td>
            <td>Improvement</td>
            <td>Betty Kane</td>
            <td>Tooling</td>
            <td>123,00</td>
        </tr>
        <tr>
            <td>Topic name 6</td>
            <td>Project</td>
            <td>Bruce Banner</td>
            <td>Tooling</td>
            <td>10.899,00</td>
        </tr>
        <tr>
            <td>Topic name 5</td>
            <td>Big feature</td>
            <td>Ra’s Al Ghul</td>
            <td>Tooling</td>
            <td>567,00</td>
        </tr>
        <tr>
            <td>Topic name 4</td>
            <td>Milestone</td>
            <td>Bruce Wayne</td>
            <td>Tooling</td>
            <td>23,50</td>
        </tr>
        <tr>
            <td>Topic name 3</td>
            <td>A/B Test</td>
            <td>Steven Rogers</td>
            <td>Tooling</td>
            <td>890,00</td>
        </tr>
        <tr>
            <td>Topic name 2</td>
            <td>Feature</td>
            <td>Curtis Newton</td>
            <td>Tooling</td>
            <td>99,00</td>
        </tr>
        <tr>
            <td>Topic name 1</td>
            <td>Improvement</td>
            <td>Edward Nygma</td>
            <td>Tooling</td>
            <td>12.500,00</td>
        </tr>
        <tr class="pagination-row">
            <td colspan="5">
                <div class="pagination">
                    <span class="current">1-10</span>
                    <span class="separator">of</span>
                    <span class="total">23</span>
                    <a href="#">
                        <span class="icon-left icon16"></span>
                    </a>
                    <a href="#">
                        <span class="icon-right icon16"></span>
                    </a>
                </div>
            </td>
        </tr>
    </tbody>
</table>

```html
<table>
    <thead>
        <tr>
            <th>
                <label>Name</label>
            </th>
            <th>
                <label>Type</label>
            </th>
            <th>
                <label>Owner</label>
            </th>
            <th>
                <label>Team</label>
            </th>
            <th>
                <label>Price</label>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Topic name 10</td>
            <td>Bug</td>
            <td>Selina Kyle</td>
            <td>Tooling</td>
            <td>4.500,00</td>
        </tr>
        <tr>
            <td>Topic name 9</td>
            <td>Refactoring</td>
            <td>Pamela Isley</td>
            <td>Tooling</td>
            <td>3.239,00</td>
        </tr>
        <tr class="pagination-row">
            <td colspan="5">
                <div class="pagination">
                    <span class="current">1-10</span>
                    <span class="separator">of</span>
                    <span class="total">23</span>
                    <a href="#">
                        <span class="icon-left icon16"></span>
                    </a>
                    <a href="#">
                        <span class="icon-right icon16"></span>
                    </a>
                </div>
            </td>
        </tr>
    </tbody>
</table>
```

