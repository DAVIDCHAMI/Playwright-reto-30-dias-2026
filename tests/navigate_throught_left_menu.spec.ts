import {test, expect} from '@playwright/test';

test('Navigate through left menu', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')
     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
     await page.getByRole('button', { name: 'Login' }).click();

     const menuItems = page.getByLabel('Sidepanel').getByRole('listitem');
     const currentMenuItem = await menuItems.count();
     const dashboardUrl = page.url();

     for (let i = 0; i < currentMenuItem; i++) {
         const menuItem = menuItems.nth(i);
         const menuItemText = await menuItem.innerText();
         
       if(menuItemText !== 'Maintenance') {
        await menuItem.click();
            
         }else{
             await menuItem.click();
             await page.goBack();
             await expect(page.getByLabel('Sidepanel')).toBeVisible({ timeout: 60000 });
         

     }

}
   });




    test('navigate en opciones de menu', async ({page}) => {
  
        const multiOptionsMenu = [
             
        {
            menu:'Skills',
            url:'/web/index.php/admin/viewSkills'
        },

         {
            menu:'Education',
            url:'/web/index.php/admin/viewEducation'
        },

         {
            menu:'Licenses',
            url:'/web/index.php/admin/viewLicenses'
        }
        ]

    await page.goto('https://opensource-demo.orangehrmlive.com/')
     await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
     await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
     await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'Admin' }).click();
    const optionPadre= page.getByRole('navigation', { name: 'Topbar Menu' }).getByText('Qualifications');
    await optionPadre.click();

    const optionList = page.getByRole('menu').locator('li');

    for(let option of multiOptionsMenu) {
     const optionElement = optionList.filter({ hasText: option.menu });
     optionElement.click();
     await expect(page).toHaveURL(new RegExp(option.url));
     optionPadre.click();
    }

    });
