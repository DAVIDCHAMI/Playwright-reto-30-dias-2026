import {test,expect} from '@playwright/test'

test('obtener usuarios', async({page}) =>{
      await page.goto('https://opensource-demo.orangehrmlive.com/')
     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
     await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('navigation', { name: 'Topbar Menu' }).getByText('User Management').click();
    await page.getByRole('menuitem', { name: 'Users' }).click(); 


    const rows = await page.getByRole('table').getByRole('row');
    const employeeNames: string[] = [];

    const rowCount = await rows.count();

    for (let i = 1; i < rowCount; i++) {
         const cell = rows.nth(i).getByRole('cell').nth(3);
         const employyename = await cell.textContent();

         if(employyename){
             employeeNames.push(employyename)
         }
         
    }

    console.log('Employee Names:', employeeNames);


})